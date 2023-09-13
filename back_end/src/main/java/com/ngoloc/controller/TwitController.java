package com.ngoloc.controller;

import com.ngoloc.dto.TwitDto;
import com.ngoloc.exception.TwitException;
import com.ngoloc.exception.UserException;
import com.ngoloc.mapper.TwitDtoMapper;
import com.ngoloc.model.Twit;
import com.ngoloc.model.User;
import com.ngoloc.request.TwitReplyRequest;
import com.ngoloc.response.ApiResponse;
import com.ngoloc.service.TwitService;
import com.ngoloc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/twits")
public class TwitController {

    @Autowired
    private TwitService twitService;
    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<TwitDto> createTwit(@RequestBody Twit req, @RequestHeader("Authorization") String jwt)
            throws UserException, TwitException {
        User user = userService.findUserProfileByJwt(jwt);
        Twit twit = twitService.createTwit(req, user);

        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit, user);
        return new ResponseEntity<>(twitDto, HttpStatus.CREATED);
    }

    @PostMapping("/reply")
    public ResponseEntity<TwitDto> replyTwit(@RequestBody TwitReplyRequest req, @RequestHeader("Authorization") String jwt)
            throws UserException, TwitException {
        User user = userService.findUserProfileByJwt(jwt);
        Twit twit = twitService.createReply(req, user);

        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit, user);
        return new ResponseEntity<>(twitDto, HttpStatus.CREATED);
    }

    @PutMapping("/{twitId}/retwit")
    public ResponseEntity<TwitDto> retwit(@PathVariable Long twitId, @RequestHeader("Authorization") String jwt)
            throws UserException, TwitException {
        User user = userService.findUserProfileByJwt(jwt);
        Twit twit = twitService.retwit(twitId, user);

        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit, user);
        return new ResponseEntity<>(twitDto, HttpStatus.OK);
    }

    @GetMapping("/{twitId}")
    public ResponseEntity<TwitDto> findTwitById(@PathVariable Long twitId, @RequestHeader("Authorization") String jwt)
            throws UserException, TwitException {
        User user = userService.findUserProfileByJwt(jwt);
        Twit twit = twitService.retwit(twitId, user);

        TwitDto twitDto = TwitDtoMapper.toTwitDto(twit, user);
        return new ResponseEntity<>(twitDto, HttpStatus.OK);
    }

    @DeleteMapping("/{twitId}")
    public ResponseEntity<ApiResponse> deleteTwit(@PathVariable Long twitId, @RequestHeader("Authorization") String jwt)
            throws UserException, TwitException {
        User user = userService.findUserProfileByJwt(jwt);

        twitService.deleteTwitById(twitId, user.getId());

        ApiResponse res = new ApiResponse();
        res.setMessage("Twit delete successfully");
        res.setStatus(true);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<TwitDto>> getAllTwits(@RequestHeader("Authorization") String jwt)
            throws UserException, TwitException {
        User user = userService.findUserProfileByJwt(jwt);
        List<Twit> twits = twitService.findAllTwit();
        List<TwitDto> twitDtos = TwitDtoMapper.toTwitDtos(twits, user);
        return new ResponseEntity<>(twitDtos, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}/likes")
    public ResponseEntity<List<TwitDto>> findTwitByLikesContainesUser(@PathVariable Long userId, @RequestHeader("Authorization") String jwt)
            throws UserException, TwitException {
        User user = userService.findUserProfileByJwt(jwt);
        List<Twit> twits = twitService.findByLikesContainsUser(user);

        List<TwitDto> twitDtos = TwitDtoMapper.toTwitDtos(twits, user);

        return new ResponseEntity<>(twitDtos, HttpStatus.OK);
    }
}
