from django.urls import path
from .views import (
                SignupViews,
                getCSRFToken,
                LoginView,
                LogoutView,
                CheckAuthenticaedView,
            )

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('authenticated', CheckAuthenticaedView.as_view()),
    path('register', SignupViews.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('csrf_cookie', getCSRFToken.as_view()),
    ]