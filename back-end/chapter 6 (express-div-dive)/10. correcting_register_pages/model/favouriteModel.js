const fs = require("fs");
const path = require("path");

class favouriteModel {
    constructor(favHome) {
        this.id = favHome.Homeid; // ✅ FIXED (consistent naming)
    }

    save(callback) {
        favouriteModel.fetchAll((error, favHomes) => {
            if (error) {
                return callback(error);
            }

            let allData = favHomes || [];

            // ✅ Correct duplicate check
            const exists = allData.some(home => home.id === this.id);

            if (exists) {
                return callback(null, "Already marked as favourite");
            }

            // ✅ Push plain object (NOT this)
            const newHome = {
                id: this.id
            };

            allData.push(newHome);

            const filepath = path.join(__dirname, "../database/favouriteData.json");

            fs.writeFile(filepath, JSON.stringify(allData, null, 2), (error) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, "Home added successfully");
            });
        });
    }

    static fetchAll(callback) {
        const filePath = path.join(__dirname, "../database/favouriteData.json");

        fs.readFile(filePath, "utf-8", (error, data) => {
            if (error) {
                return callback(null, []); // file not found case handle
            }

            if (!data.trim()) {
                return callback(null, []);
            }

            try {
                const parsedData = JSON.parse(data);
                callback(null, parsedData);
            } catch (err) {
                callback(err, []);
            }
        });
    }
}

module.exports = favouriteModel;