import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import TeacherLearning from '../pages/teacher/TeacherLearning';
import StudentList from '../pages/teacher/StudentList';
import TeacherCourse from '../pages/teacher/TeacherCourse';
import TeacherQA from '../pages/teacher/TeacherQA';
import TeacherPayment from '../pages/teacher/TeacherPayment';
import TeacherPayout from '../pages/teacher/TeacherPayout';
import TeacherProfile from '../pages/teacher/TeacherProfile';
import TeacherSetting from '../pages/teacher/TeacherSetting';

function UserDashboard() {
    return (
        <Routes>
            <Route path="/" element={<TeacherDashboard />} />
            <Route path="/mylearning" element={<TeacherLearning />} />
            <Route path="/mycourse" element={<TeacherCourse />} />
            <Route path="/student" element={<StudentList />} />
            
            {/* Placeholder for routes being fixed */}
            <Route path="/createcourse" element={<div>Create Course Page</div>} />
            <Route path="/q&a" element={<TeacherQA/>} />
            <Route path="/payment" element={<TeacherPayment/>} />
            <Route path="/payout" element={<TeacherPayout/>} />
            <Route path="/myprofile" element={<TeacherProfile/>} />
            <Route path="/setting" element={<TeacherSetting/>} />
        </Routes>
    );
}

export default UserDashboard;