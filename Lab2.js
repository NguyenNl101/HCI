document.getElementById('courseForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const courseName = document.getElementById('courseName').value;
    const instructor = document.getElementById('instructor').value;
    const courseId = document.getElementById('courseId').value;

    // Validate required fields
    if (!courseName) {
        document.getElementById('courseNameError').innerText = 'Course name is required.';
        return;
    } else {
        document.getElementById('courseNameError').innerText = '';
    }

    if (!instructor) {
        document.getElementById('instructorError').innerText = 'Instructor is required.';
        return;
    } else {
        document.getElementById('instructorError').innerText = '';
    }

    // Simulate course creation and display details
    document.getElementById('detailCourseId').innerText = courseId;
    document.getElementById('detailCourseName').innerText = courseName;
    document.getElementById('detailInstructor').innerText = instructor;
    document.getElementById('detailCreatedAt').innerText = new Date().toLocaleString();
    document.getElementById('detailUpdatedAt').innerText = new Date().toLocaleString();

    // Show course details
    document.getElementById('courseDetails').classList.remove('hidden');
});

document.getElementById('deleteButton').addEventListener('click', function () {
    if (confirm('Are you sure you want to delete this course?')) {
        // Logic for deleting the course (e.g., API call)
        alert('Course deleted successfully!');
    }
});

document.getElementById('closeDetailsButton').addEventListener('click', function () {
    document.getElementById('courseDetails').classList.add('hidden');
});