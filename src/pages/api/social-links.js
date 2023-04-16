import extractData from './extract-data';

export default function handler(req, res) {
    try {
        const { SocialLinks } = extractData();
        res.status(200).json(SocialLinks);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
