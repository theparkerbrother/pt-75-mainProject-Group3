export const MoviesRow = ({ movie, isAuthenticated }) => {
    return (
        <tr>
            <td className="text-start">{movie.title}</td>
            <td>
                <img src={movie.poster} alt={`${movie.title} Poster`} style={{ width: "50px", height: "auto" }} />
            </td>
            <td>{movie.anticipationScore}</td>
            <td>{movie.satisfactionScore}</td>
            <td>
                <img src={movie.designation} alt="Designation Icon" style={{ width: "35px", height: "auto" }} />
            </td>
            {isAuthenticated && <>
                <td>{movie.myAnticipationScore}</td>
                <td>{movie.mySatisfactionScore}</td>
                <td>
                    <img src={movie.myDesignation} alt="Designation Icon" style={{ width: "35px", height: "auto" }} />
                </td>
            </>}
        </tr>
    );
};
