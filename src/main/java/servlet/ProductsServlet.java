package servlet;

import entity.User;
import repository.ProductRepository;
import repository.UserRepository;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class ProductsServlet extends HttpServlet {
    private UserRepository userRepository = new UserRepository();
    private ProductRepository productRepository = new ProductRepository();

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        HttpSession currentSession = request.getSession();
        User currentUser = (User) currentSession.getAttribute("currentUser");
        if (currentUser == null) {
            getServletContext().getRequestDispatcher("/jsp/authorization.jsp").forward(request, response);
        } else {
            request.setAttribute("products", productRepository.getProductList());
            getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
        }
    }
}
