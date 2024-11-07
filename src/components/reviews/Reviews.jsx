
const Reviews = ({ reviews }) => {
	const {results} = reviews;
	return (
		<ul>
			{results.map(review => {
				return (
					<li key={review.id}>
						<h4>{review.author}</h4>
						<p>{review.content}</p>
					</li>
				)
			})}
		</ul>
	)
}

export default Reviews;