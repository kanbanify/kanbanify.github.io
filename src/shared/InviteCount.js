import Component from '../Component.js';

class Profile extends Component {

    renderTemplate() {

        const inviteCount = this.props.numOfInvites;
 
        return /*html*/`
            <div class="invites-count">
                <p>${inviteCount}</p>
            </div>
        `;
    }
}

export default Profile;