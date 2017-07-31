import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllReviews, addNewReview } from '../store';


class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      rating: 1,



    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
  }
componentDidMount() {
    this.props.loadAllReviews();
  }


  handleChangeContent (event) {
    this.setState({ content: event.target.value });
  }

  handleChangeRating (rating) {
      console.log("EVENT", rating)
    this.setState({ rating: rating});
  }


  handleSubmit (event) {
    event.preventDefault();

    const review = {
      content: this.state.content,
      rating: this.state.rating,
      userId: this.props.user.id || 1,
      characterId: this.props.characterId || 1
      //1 is defauld user Id

    }
    this.props.addNewReview(review)


  }

  render () {
    const reviews = this.props.reviews;

console.log("RATING", this.handleChangeRating);

    return (
    <div className="list-group">
       <h2>All Riviews</h2>


          {
           reviews.map((review, i) => {
              return (
                <div className="col-lg-6" key={i}>
                    <h5>By<span> {review.user.email}</span>
                    <span> on {review.createdAt} </span>
                    </h5>
                    <h5>{review.content}</h5>
                    <h5> Rating {review.rating} of 5 stars </h5>

                </div>

              );
            })
          }


      <form className="review" onSubmit={this.handleSubmit}>
        <h4>Write your review</h4>
         <h5>Rating</h5>
            <fieldset className="rating">
                <legend>Please rate:</legend>
                <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!" onClick={() => this.handleChangeRating(5)}>5 stars</label>
                <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good" onClick={() => this.handleChangeRating(4)}>4 stars</label>
                <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh" onClick={() => this.handleChangeRating(3)}>3 stars</label>
                <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad" onClick={() => this.handleChangeRating(2)}>2 stars</label>
                <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time" onClick={() => this.handleChangeRating(1)}>1 star</label>
            </fieldset>
          <div className="form-group">
            <textarea cols="50" rows="6" name="comment" onChange={this.handleChangeContent}></textarea>
          </div>
        <button type="submit" className="btn btn-success"> Submit </button>
      </form>
       </div>
    );
  }
}
/* -----------------    CONTAINER     ------------------ */
// const mapStateToProps = ({reviews}) => ({reviews});

// export default withRouter(connect(mapStateToProps)(Review));

// export default Review;

//  <div className="rating"  >

//              <span onClick={() => this.handleChangeRating(5)}>☆</span><span onClick={() => this.handleChangeRating(4)}>☆</span><span onClick={() => this.handleChangeRating(3)}>☆</span><span onClick={() => this.handleChangeRating(2)}>☆</span><span onClick={() => this.handleChangeRating(1)}>☆</span>
//         </div>
const mapStateToProps = ({reviews, user}) => ({reviews, user});

const mapDispatchToProps = (dispatch) => {
  return {
loadAllReviews ()
 {
     console.log("LOAD")
      dispatch(fetchAllReviews());
    },
   addNewReview(review, userId){
      console.log("review", review);
      dispatch(addNewReview(review, userId));

  }
}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Review));
