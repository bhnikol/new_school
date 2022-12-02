module.exports = {
    sum: function (a, b) {
        return a + b;
    },
    sortable: function (field, sort) {
        const sortType = field === sort.column ? sort.type : 'default';
        const icons = {
            default: 'fa-solid fa-sort',
            asc: 'fa-solid fa-arrow-down-short-wide',
            desc: 'fa-solid fa-arrow-down-wide-short',
        };

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };
        const icon = icons[sortType];
        const type = types[sortType];
        return `<a href="?_sort&column=${field}&type=${type}"><i class="${icon}"></i></a>`;
    },
    loginHeader: function(account) {
        if(account) {
            return `<li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              ${account.name}
              <img class="rounded-circle" style="width: 25px; height: 25px;" src="${account.image}" alt="">
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/me/store/courses">Khoá học của tôi</a></li>
              <li><a class="dropdown-item" href="/courses/create">Đăng Khóa học</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="/account/logout">Đăng xuất</a></li>
            </ul>
          </li>`
        }
        else {
            return `<li class="nav-item d-flex align-items-center">
            <a class="nav-link active btn btn-link" aria-current="page" href="/account">Login</a>
          </li>`
        }
    }

}
