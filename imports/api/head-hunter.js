import axios from 'axios';

export default {
    vacancies(employer_id) {
        return new Promise((resolve, reject) => {
            if (!employer_id) {
                return resolve([]);
            }

            axios.get(`https://api.hh.ru/vacancies?employer_id=${employer_id}&per_page=100`).then((result) => {
                resolve(result && result.data || []);
            }, reject);
        });
    }
};
