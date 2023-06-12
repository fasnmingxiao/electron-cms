<template>
  <div class="main-header">
    <a class="menu-link-main" href="#">All Users</a>
    <div class="header-menu">
      <a class="main-header-link is-active" href="#">All</a>
      <a class="main-header-link" href="#">Admin</a>
      <a class="main-header-link" href="#">User</a>
    </div>
  </div>
  <div class="content-wrapper">
    <div class="content-section">
      <div class="content-section-title">Users table</div>
      <div class="wp_management_table">
        <table class="management_table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Status</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="wp-avatar-table">
                  <img
                    class="avatar-table"
                    src="https://i.pinimg.com/564x/24/e9/b0/24e9b01a8c1904960357054b9906cfaa.jpg"
                    alt=""
                  />
                  <p style="padding: 0 0 0 0.5em">Minh Hiếu</p>
                </div>
              </td>
              <td>hieupdlk55</td>
              <td>
                <span class="status">
                  <span class="status-circle green"></span>
                  Actived
                </span>
              </td>
              <td>Supper Admin</td>
              <td>
                <div class="menu m-auto">
                  <button class="dropdown">
                    <ul>
                      <li><a href="#">View Detail</a></li>
                      <li><a href="#">Edit</a></li>
                      <li><a href="#">Delete</a></li>
                    </ul>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="wp-avatar-table">
                  <img
                    class="avatar-table"
                    src="https://i.pinimg.com/564x/b7/47/31/b74731ea54b61fa7b4ae4ea604e3f621.jpg"
                    alt=""
                  />
                  <p style="padding: 0 0 0 0.5em">Đức Thiện</p>
                </div>
              </td>
              <td>ducthien02</td>
              <td>
                <span class="status">
                  <span class="status-circle red"></span>
                  <span class="text-status">Disabled</span>
                </span>
              </td>
              <td>Admin</td>
              <td>
                <div class="menu m-auto">
                  <button class="dropdown">
                    <ul>
                      <li><a href="#">Go to Discover</a></li>
                      <li><a href="#">Learn more</a></li>
                      <li><a href="#">Uninstall</a></li>
                    </ul>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="wp-avatar-table">
                  <img
                    class="avatar-table"
                    src="https://i.pinimg.com/564x/66/93/9d/66939d9d6aaaa5a733442f2560ea997f.jpg"
                    alt=""
                  />
                  <p style="padding: 0 0 0 0.5em">Khang Pham</p>
                </div>
              </td>
              <td>pham920s</td>
              <td>
                <span class="status">
                  <span class="status-circle green"></span>
                  Active
                </span>
              </td>
              <td>User</td>
              <td>
                <div class="menu m-auto">
                  <button class="dropdown">
                    <ul>
                      <li><a href="#">Go to Discover</a></li>
                      <li><a href="#">Learn more</a></li>
                      <li><a href="#">Uninstall</a></li>
                    </ul>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="wp-avatar-table">
                  <img
                    class="avatar-table"
                    src="https://i.pinimg.com/564x/fd/e0/c8/fde0c8258f60022b975fd91da50108cf.jpg"
                    alt=""
                  />
                  <p style="padding: 0 0 0 0.5em">Tuấn VB</p>
                </div>
              </td>
              <td>zed3zs39x</td>
              <td>
                <span class="status">
                  <span class="status-circle green"></span>
                  Active
                </span>
              </td>
              <td>User</td>
              <td>
                <div class="menu m-auto">
                  <button class="dropdown">
                    <ul>
                      <li><a href="#">Go to Discover</a></li>
                      <li><a href="#">Learn more</a></li>
                      <li><a href="#">Uninstall</a></li>
                    </ul>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="wp-avatar-table">
                  <img
                    class="avatar-table"
                    src="https://i.pinimg.com/564x/dc/70/df/dc70dfe89934f75ff731e71a6286a927.jpg"
                    alt=""
                  />
                  <p style="padding: 0 0 0 0.5em">Duy Mạnh</p>
                </div>
              </td>
              <td>vipprova23</td>
              <td>
                <span class="status">
                  <span class="status-circle green"></span>
                  Active
                </span>
              </td>
              <td>Admin</td>
              <td>
                <div class="menu m-auto">
                  <button class="dropdown">
                    <ul>
                      <li><a href="#">Go to Discover</a></li>
                      <li><a href="#">Learn more</a></li>
                      <li><a href="#">Uninstall</a></li>
                    </ul>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
