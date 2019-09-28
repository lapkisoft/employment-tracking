import React from 'react';
import {Link} from 'react-router-dom';

export default class extends React.Component {
    render() {
        return (
            <div>
                <h2>Пользователь {this.props.code}</h2>
                <p>{this.props.first_name} {this.props.last_name} {this.props.middle_name}</p>
                <div className="controls">
                    {!this.props.work ? <Link to={`/employer/user/${this.props.id}/work/create`}>Добавить запись о работе</Link> : ''}
                    {this.props.work ? <Link to={`/employer/user/${this.props.id}/work/update/${this.props.work.id}`}>Отредактировать запись о работе</Link> : ''}
                </div>
            </div>
        );
    }
}
