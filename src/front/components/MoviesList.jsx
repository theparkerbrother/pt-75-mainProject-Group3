export const MoviesList = ({ isAuthenticated = false, movies }) => {
    return (
        <thead className="thead-dark">
            <tr>
                <th scope="col" className="text-start">Title</th>
                <th scope="col">Poster</th>
                <th scope="col">Anticipation Score</th>
                <th scope="col">Satisfaction Score</th>
                <th scope="col">Designation</th>
                {isAuthenticated && <>
                    <th scope="col">My Anticipation Score</th>
                    <th scope="col">My Satisfaction Score</th>
                    <th scope="col">My Designation</th>
                </>}
            </tr>
        </thead>
    );
};