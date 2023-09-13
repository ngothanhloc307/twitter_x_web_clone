package com.ngoloc.repository;

import com.ngoloc.model.Twit;
import com.ngoloc.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TwitRepository extends JpaRepository<Twit, Long> {

    List<Twit> findAllByIsTwitTrueOrderByCreatedAtDesc();

    List<Twit> findByRetwitUserContainsOrUser_IdAndIsTwitTrueOrderByCreatedAtDesc(User user, Long userId);

//    List<Twit> findByLikesContainingOrderByCreatedAtDesc(User user);

    @Query("SELECT T FROM Twit T JOIN T.likes L where L.user.id=:userId")
    List<Twit> findByLikesUser_id(Long userId);
}
