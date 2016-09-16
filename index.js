module.exports = (Franz) => {
    class Hatena extends Franz {
        validateServer(URL) {
            const api = `${URL}`;
            return new Promise((resolve, reject) => {
                $.get(api, (resp) => {
                    resolve();
                }).fail(reject);
            });
        }
    }

    return Hatena;
};
