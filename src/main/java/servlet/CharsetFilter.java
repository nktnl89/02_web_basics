package servlet;

import javax.servlet.*;
import java.io.IOException;

public class CharsetFilter implements Filter {
    private String encoding;
    @Override
    public void init(FilterConfig config) throws ServletException {
        encoding = config.getInitParameter("requestEncoding");
        if (encoding == null)
            encoding = "UTF-8";
    }
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain next)
            throws IOException, ServletException {
        request.setCharacterEncoding(encoding);
        response.setContentType("charset=UTF-8");//text/html;
        next.doFilter(request, response);
    }
    @Override
    public void destroy() {
    }
}
