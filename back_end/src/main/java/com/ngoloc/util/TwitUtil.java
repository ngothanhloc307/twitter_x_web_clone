package com.ngoloc.util;

import com.ngoloc.model.Like;
import com.ngoloc.model.Twit;
import com.ngoloc.model.User;

public class TwitUtil {

    public final static boolean isLikedByReqUser(User reqUser, Twit twit) {

        for (Like like : twit.getLikes()) {
            if (like.getUser().getId().equals(reqUser.getId())) {
                return true;
            }
        }
        return false;
    }

    public static final boolean isRetwitedByReqUser(User reqUser, Twit twit) {
        for (User user : twit.getRetwitUser()) {
            if (user.getId().equals(reqUser.getId())) {
                return true;
            }
        }
        return false;
    }
}
