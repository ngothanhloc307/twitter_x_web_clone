package com.ngoloc.controller;

import com.ngoloc.dto.LikeDto;
import com.ngoloc.exception.TwitException;
import com.ngoloc.exception.UserException;
import com.ngoloc.mapper.LikeDtoMapper;
import com.ngoloc.model.Like;
import com.ngoloc.model.User;
import com.ngoloc.service.LikeService;
import com.ngoloc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LikeController {

    @Autowired
    private UserService userService;

    @Autowired
    private LikeService likeService;

    @PostMapping("/{twiId}/likes")
    public ResponseEntity<LikeDto> likeTwit(@PathVariable Long twiId,
                                            @RequestHeader("Authorization") String jwt) throws UserException, TwitException {
        User user = userService.findUserProfileByJwt(jwt);
        Like like = likeService.likeTwit(twiId, user);

        LikeDto likeDto = LikeDtoMapper.toLikeDto(like, user);

        return new ResponseEntity<LikeDto>(likeDto, HttpStatus.CREATED);
    }

    @PostMapping("/twit/{twiId}")
    public ResponseEntity<List<LikeDto>> getAllLikes(@PathVariable Long twiId,
                                                     @RequestHeader("Authorization") String jwt) throws UserException, TwitException {
        User user = userService.findUserProfileByJwt(jwt);
        List<Like> likes = likeService.getAllLikes(twiId);

        List<LikeDto> likeDto = LikeDtoMapper.toLikeDtos(likes, user);

        return new ResponseEntity<>(likeDto, HttpStatus.CREATED);
    }
}
