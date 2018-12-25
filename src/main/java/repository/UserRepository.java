package repository;

import entity.User;

import java.util.ArrayList;
import java.util.List;

public class UserRepository implements UserRepositoryInterface {
    private List<User> userList = new ArrayList<>();

    public UserRepository() {
        userList.add(new User("Admin","123"));
        userList.add(new User("User","123"));
    }

    public List<User> getUserList() {
        return userList;
    }

    public void setUserList(List<User> userList) {
        this.userList = userList;
    }

    public UserRepository(List<User> userList) {
        this.userList = userList;
    }

    @Override
    public User getUserByLogin(String login) {
        return userList.stream().filter(user -> user.getLogin().equals(login)).findFirst().orElse(null);
    }
}
