import { Link } from 'react-router-dom';
import sticker from '../resources/assets/stickers/7.png';

export default function HomePage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-4xl font-bold">
            <p>My Digital Journal ***********</p>
        <img
            src={sticker}
            alt="Cute sticker"
            className="w-32 h-32 object-contain mx-auto shadow-lg rounded-xl"
        />
        </div>
        
    );
}