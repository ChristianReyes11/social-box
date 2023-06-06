import React, { Component } from 'react';
import KafkaService from "../services/kafka.service";
import './likes.css';
import axios from 'axios';

class ReactionsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: {
        like: 0,
        love: 0,
        laugh: 0,
        cry: 0,
        wow: 0,
        angry: 0
      },
      isOpen: false
    };
  }

  componentDidMount() {
    this.fetchReactions();
  }

  fetchReactions = async () => {
    try {
      
      const id = this.props.id;
      console.log("try ",id);
      const uri = "https://mongoapi-service-christianreyes11.cloud.okteto.net/api/reactions";
      const responseLike = await axios.get(`${uri}/${id}/like`);
      const likeCount = responseLike.data ? responseLike.data.n : 0;
      const responseLove = await axios.get(`${uri}/${id}/love`);
      const loveCount = responseLove.data ? responseLove.data.n : 0;
      const responseLaugh = await axios.get(`${uri}/${id}/laugh`);
      const laughCount = responseLaugh.data ? responseLaugh.data.n : 0;
      const responseSad = await axios.get(`${uri}/${id}/cry`);
      const sadCount = responseSad.data ? responseSad.data.n : 0;
      const responseWow = await axios.get(`${uri}/${id}/wow`);
      const wowCount = responseWow.data ? responseWow.data.n : 0;
      const responseAngry = await axios.get(`${uri}/${id}/angry`);
      const angryCount = responseAngry.data ? responseAngry.data.n : 0;

      this.setState({
        likes: {
          like: likeCount,
          love: loveCount,
          laugh: laughCount,
          cry: sadCount,
          wow: wowCount,
          angry: angryCount
        }
      });
    } catch (error) {
      console.log('Error al obtener las reacciones:', error);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.likes !== this.props.likes) {
      const { likes } = this.props;
      this.setState({
        likes: {
          like: likes[0] || 0,
          love: likes[1] || 0,
          laugh: likes[2] || 0,
          cry: likes[3] || 0,
          wow: likes[4] || 0,
          angry: likes[5] || 0
        }
      });
    }
  }

  handleClick = (reaction) => {
    const { likes: reactions } = this.state;
    this.setState({ likes: { ...reactions, [reaction]: reactions[reaction] + 1 }, isOpen: false });
  }

  handleMenuClick = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  saveLike(e, status,reaction) {
  
    let data = {
      id: 0,
      status: status
    };
 
    console.log(JSON.stringify(data));
 
    KafkaService.reaction(this.props.email, this.props.id, reaction);
    e.preventDefault();
  }


  render() {
    const { likes, isOpen } = this.state;

    return (
      <div className="reactions-menu">
        <button onClick={this.handleMenuClick}>Reacciones</button>
        {isOpen && (
          <div className="reactions-menu-dropdown">
            {Object.keys(likes).map((reaction) => (
              <button key={reaction} className='reaccion' onClick={(e) => {
                e.preventDefault();
                this.saveLike(e, 1,reaction);
                this.handleClick(reaction);
              }}>
                <span role="img" aria-label={reaction}>
                  {reaction === 'like' ? '\u{1F44D}' :
                    reaction === 'love' ? '\u{2764}' :
                    reaction === 'laugh' ? '\u{1F602}' :
                    reaction === 'cry' ? '\u{1F62D}' :
                    reaction === 'wow' ? '\u{1F62E}' :
                    reaction === 'angry' ? '\u{1F620}' : null}
                </span>
                <span className="count">{likes[reaction]}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ReactionsMenu;