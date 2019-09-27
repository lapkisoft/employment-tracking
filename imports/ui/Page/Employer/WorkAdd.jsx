import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';

class WorkAdd extends React.Component {
    render() {
        return (
            <div>
                <h1>Work add</h1>

                <form action="">
                    <div className="form-group">
                        <label htmlFor="employer-work-name-input">Наимениование организации</label>
                        <input id="employer-work-name-input" name="organization_name" type="text" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="employer-work-position-input">Должность</label>
                        <input id="employer-work-position-input" name="position" type="text" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="employer-work-begin-at-input">Дата приема на работу</label>
                        <input id="employer-work-begin-at-input" name="begin_at" type="text" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="employer-work-begin-comment-input">Сведения о приеме</label>
                        <input id="employer-work-begin-comment-input" name="begin_comment" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="employer-work-end-at-input">Дата увольнения</label>
                        <input id="employer-work-end-at-input" name="end_at" type="text"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="employer-work-end-comment-input">Сведения об увольнении</label>
                        <input id="employer-work-end-comment-input" name="end_comment" type="text"/>
                    </div>

                    <div className="form-controls">
                        <button type="submit">Сохранить</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withTracker(() => {
    return {};
})(WorkAdd);
