import profpic from './assets/mypic.png'

function Card(){

    const cardstyle = {
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: '5px 5px 5px black',
        padding: '20px',
        textAlign: 'center',
        maxWidth: '250px',
        display: 'inline-block'
    }

    const cardimg = {
        maxWidth: '60%',
        height: 'auto',
        borderRadius: '20%'
    }

    const cardtitle = {
        fontFamily: 'Arial, Helvetica, sans-serif',
        margin: '0',
        color: 'rgb(140, 85, 2)'
    }

    const cardtxt = {
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: 'rgb(110, 66, 5)'
    }

    return(
        <div style={cardstyle}>
            <img style={cardimg} src={profpic} alt="profile picture"></img>
            <h2 style={cardtitle}>Carl Pano</h2>
            <p style={cardtxt}>I am a student</p>
        </div>
    );
}

export default Card