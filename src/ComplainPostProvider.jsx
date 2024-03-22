import ComplainPost from "./ComplainPost"
import "./ComplainPostProvider.css"
// import ComplainPost from "./Componets/PostUI/ComplainPost";
// import {ComplainPost} form "C:\\Users\\ASUS\\OneDrive\\Desktop\\Hostel Management System\\StudentPortal\\src\\ComplainPost.jsx"
const ComplainPostProvider=()=>{
    return(
        <>
        <div className="threePostIsAllow">
        <ComplainPost/>
        <ComplainPost/>
        <ComplainPost/>
        <ComplainPost/>
        </div>
        
        </>
    )
}
export default ComplainPostProvider;
