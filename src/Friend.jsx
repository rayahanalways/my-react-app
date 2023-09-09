export default function Friend({friend}) {
    return (
        <div className="friend">
            <h3>name: {friend.name} </h3>
            <h5>email: {friend.email} </h5>
        </div>
    )
}