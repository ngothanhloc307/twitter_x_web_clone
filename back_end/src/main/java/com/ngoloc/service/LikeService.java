package com.ngoloc.service;

import com.ngoloc.exception.TwitException;
import com.ngoloc.exception.UserException;
import com.ngoloc.model.Like;
import com.ngoloc.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LikeService {

    public Like likeTwit(Long twitId, User user) throws UserException, TwitException;

    public List<Like> getAllLikes(Long twitId) throws TwitException;


}
