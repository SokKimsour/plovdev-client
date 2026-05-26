import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import TeacherLearning from '../pages/teacher/TeacherLearning';
import StudentList from '../pages/teacher/StudentList';
import TeacherCourse from '../pages/teacher/TeacherCourse';

function UserDashboard() {
    return (
        <Routes>
            <Route path="/" element={<TeacherDashboard />} />
            <Route path="/mylearning" element={<TeacherLearning />} />
            <Route path="/mycourse" element={<TeacherCourse />} />
            <Route path="/student" element={<StudentList />} />
            
            {/* Placeholder for routes being fixed */}
            <Route path="/createcourse" element={<div>Create Course Page</div>} />
            <Route path="/q&a" element={<div>Q&A Page</div>} />
            <Route path="/payment" element={<div>Payment Page</div>} />
            <Route path="/payout" element={<div>Payout Page</div>} />
            <Route path="/myprofile" element={<div>My Profile Page</div>} />
            <Route path="/setting" element={<div>Setting Page</div>} />
        </Routes>
    );
}

export default UserDashboard;