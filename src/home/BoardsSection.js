import Component from '../Component.js';
import BoardsHeader from './BoardsHeader.js';
import BoardsList from './BoardsList.js';
import { auth } from '../services/firebase.js';

class BoardsSection extends Component {
    render() {
        const dom = this.renderDOM();

        const boards = this.props.boards;
        // consider a more functional approach
        const uid = auth.currentUser.uid;
        const personalBoards = boards.filter(board => board.owner === uid);
        const collaborativeBoards = boards.filter(board => board.owner !== uid);

        // boards.forEach(board => {
        //     if(board.owner === auth.currentUser.uid){
        //         personalBoards.push(board);
        //     } else {
        //         collaborativeBoards.push(board);
        //     }
        // });

        const personalHeader = new BoardsHeader({
            title: 'Personal Boards',
            image: './assets/personal-boards.png'
        });
        const colabHeader = new BoardsHeader({
            title: 'Collaborative Boards',
            image: './assets/collaborative-boards.png'
        });

        const boardsListPersonal = new BoardsList({
            boards: personalBoards
        });
        const boardsListCollaborative = new BoardsList({
            boards: collaborativeBoards
        });

        dom.appendChild(personalHeader.render());
        dom.appendChild(boardsListPersonal.render());

        dom.appendChild(colabHeader.render());
        dom.appendChild(boardsListCollaborative.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div class="boards-section"></div>
        `;
    }
}

export default BoardsSection;
