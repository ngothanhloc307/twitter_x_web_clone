package com.ngoloc.service;

import com.ngoloc.exception.TwitException;
import com.ngoloc.exception.UserException;
import com.ngoloc.model.Twit;
import com.ngoloc.model.User;
import com.ngoloc.request.TwitReplyRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TwitService {

    public Twit createTwit(Twit req, User user) throws UserException;

    public List<Twit> findAllTwit();

    public Twit retwit(Long twitId, User user) throws UserException, TwitException;

    public Twit findById(Long twitId) throws TwitException;

    public void deleteTwitById(Long twitId, Long userId) throws TwitException, UserException;

    public Twit removeFromRetwit(Long twitId, User user) throws TwitException, UserException;

    public Twit createReply(TwitReplyRequest req, User user) throws TwitException;

    public List<Twit> getUserTwit(User user);

    public List<Twit> findByLikesContainsUser(User user);
}
