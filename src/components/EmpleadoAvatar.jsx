import "../empleadoAvatar.css"

const EmpleadoAvatar = ({avatarProps}) => {
    return (
        <div className="me-3">
            <img className="img-fluid imagenAvatar" src={avatarProps} alt="imagen de usuario" />
        </div>
    );
};

export default EmpleadoAvatar;