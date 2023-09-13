package com.ngoloc.service;

import com.ngoloc.exception.TwitException;
import com.ngoloc.exception.UserException;
import com.ngoloc.model.Like;
import com.ngoloc.model.Twit;
import com.ngoloc.model.User;
import com.ngoloc.repository.LikeRepository;
import com.ngoloc.repository.TwitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeServiceImplement implements LikeService {

    @Autowired
    public LikeRepository likeRepository;
    @Autowired
    public TwitRepository twitRepository;
    @Autowired
    public TwitService twitService;

    @Override
    public Like likeTwit(Long twitId, User user) throws UserException, TwitException {
        Like isLikeExist = likeRepository.isLikeExist(user.getId(), twitId);

        if (isLikeExist != null) {
            likeRepository.deleteById(isLikeExist.getId());
            return isLikeExist;
        }
        Twit twit = twitService.findById(twitId);

        Like like = new Like();
        like.setTwit(twit);
        like.setUser(user);

        Like savedLike = likeRepository.save(like);

        return savedLike;
    }

    @Override
    public List<Like> getAllLikes(Long twitId) throws TwitException {
        Twit twit = twitService.findById(twitId);
        List<Like> likes = likeRepository.findByTwitId(twitId);
        return likes;
    }
}
