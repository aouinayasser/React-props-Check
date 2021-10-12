import PropTypes from 'prop-types'

function Profile  ({fullName, profession, bio, children, handleName}) {
    return (
        <div>
            <p> I'm {fullName} and i'm a {profession}, here is my bio "{bio}".</p>
            <div>
            {children}
            </div>
            <button onClick={()=> handleName(fullName)}>Click</button>
        </div>
    )
   }

Profile.defaultProps={
    fullName:"user",
    bio:"https://defaultBio.com",
    profession:"default profession",
    handleName:()=>alert("default function")
}

Profile.propTypes={
    fullName : PropTypes.string.isRequired,
    bio : PropTypes.string.isRequired,
    profession : PropTypes.string.isRequired,
    handleName : PropTypes.func
}

export default Profile