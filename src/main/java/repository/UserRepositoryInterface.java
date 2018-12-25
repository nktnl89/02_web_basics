package repository;

import entity.User;

public interface UserRepositoryInterface {
    User getUserByLogin(String login);
}
