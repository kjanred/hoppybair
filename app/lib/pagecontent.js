import { promises as fs } from 'fs';

export async function venueHomepage() {
    const file = await fs.readFile(process.cwd() + '../json/venue.json', 'utf8');
    const jsonObj = JSON.parse(file);
    return jsonObj.map(
        function(item) {
            return {
                id: item.id.toString(),
                name: item.name,
                imgName: item.imgName,
                address1: item.address1,
                address2: item.address2,
                alt: item.alt
            };
        }
    );

  }


