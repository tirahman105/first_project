# PH University

## Functional Requirements:

### Authentication

- **User:**

  - Create Student Account (POST)
  - Create Faculty Account (POST)
  - Create Admin Account (POST)

  - **Student:**

    - Login and Logout securely
    - Update Password
    - View own profile (`students/my-profile`)

  - **Faculty:**

    - Login and Logout securely
    - Update Password
    - View own profile (`faculties/my-profile`)

  - **Admin:**
    - Login and Logout securely
    - Update Password
    - View own profile (`admins/my-profile`)

### Profile Management:

- **Student:**

  - Manage and update profile
  - Update certain fields

- **Faculty:**

  - Manage and update profile
  - Update certain fields

- **Admin:**
  - Manage and update profile
  - Update certain fields

### Academic Process:

- **Student:**

  - Enroll in offered courses for a specific semester
  - View class schedule
  - View grades
  - View notice board and events

- **Faculty:**

  - Manage student grades
  - Access students' personal and academic information

- **Admin:**
  - Manage multiple processes:
    - Semester
    - Course
    - Offered Course
    - Section
    - Room
    - Building

### User Management:

- **Admin:**
  - Manage multiple accounts
  - Block/Unblock user
  - Change user password

### Data Model:

**User:**

- \_id
- Id (generated)
- Password
- Needs Password Change
- Role
- Status
- Is Deleted
- Created At
- Updated At

**Student:**

- \_id
- Id (generated)
- Name
- Gender
- Date of Birth
- Email
- Contact No
- Emergency Contact No
- Present Address
- Permanent Address
- Guardian
- Local Guardian
- Profile Image
- Academic Department
- Is Deleted
- Created At
- Updated At

**Faculty:**

- \_id
- Id (generated)
- Designation
- Name
- Gender
- Date of Birth
- Email
- Contact No
- Emergency Contact No
- Present Address
- Permanent Address
- Profile Image
- Academic Faculty
- Academic Department
- Is Deleted
- Created At
- Updated At

**Admin:**

- \_id
- Id (generated)
- Designation
- Name
- Gender
- Date of Birth
- Email
- Contact No
- Emergency Contact No
- Present Address
- Permanent Address
- Profile Image
- Management Department
- Is Deleted
- Created At
- Updated At

**Academic Semester:**

- Name
- Year
- Code
- Start Month
- End Month

### API Endpoints:

**User:**

- `users/create-student` (POST)
- `users/create-faculty` (POST)
- `users/create-admin` (POST)

**Student:**

- `students` (GET)
- `students/:id` (GET)
- `students/:id` (PATCH)
- `students/:id` (DELETE)
- `students/my-profile`

**Faculty:**

- `faculties` (GET)
- `faculties/:id` (GET)
- `faculties/:id` (PATCH)
- `faculties/:id` (DELETE)
- `faculties/my-profile`

**Admin:**

- `admins` (GET)
- `admins/:id` (GET)
- `admins/:id` (PATCH)
- `admins/:id` (DELETE)
- `admins/my-profile`

**Auth:**

- `auth/login`
- `auth/refresh-token`
- `auth/change-password`
- `auth/forgot-password`
- `auth/reset-password`
