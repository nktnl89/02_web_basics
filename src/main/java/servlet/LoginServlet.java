package servlet;

import entity.User;
import repository.UserRepository;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class LoginServlet extends HttpServlet {
    private UserRepository userRepository = new UserRepository();

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        getServletContext().getRequestDispatcher("/jsp/authorization.jsp").forward(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession currentSession = request.getSession();
        User currentUser = userRepository.getUserByLogin(request.getParameter("login"));
        String password = request.getParameter("password");
        if ((currentUser == null || !currentUser.getPassword().equals(password))&& !request.getParameter("login").isEmpty()){
            request.setAttribute("error", "Пользователь не найден.");
            getServletContext().getRequestDispatcher("/jsp/authorization.jsp").forward(request, response);
        } else {
            currentSession.setAttribute("currentUser", currentUser);
            response.sendRedirect("/products");
        }
    }
}
