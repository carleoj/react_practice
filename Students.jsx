import PropTypes from 'prop-types'

function Student(props){
    const student = {
        fontFamily: 'Arial',
        fontSize: '2em',
        padding: '10px',
        border: '1px solid'
    }
    const studentP = {
        margin: '0'
    }
    return(
        <div style={student}>
            <p style={studentP}>Name: {props.name}</p>
            <p style={studentP}>Age: {props.age}</p>
            <p style={studentP}>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student