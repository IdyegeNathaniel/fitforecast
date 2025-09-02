
interface OutfitProps {
    temp: number;
    description: string;
}

interface OutfitRecommendations {
    clothing: string[];
    accessories: string[];
    footwear: string;
    color: string;
}

export default function FitRecommendation({ temp, description }: OutfitProps) {

    const getOutfitRecommendation = (): OutfitRecommendations => {
        const tempC = Math.round(temp);
        const desc = description.toLowerCase();

        let outfit: OutfitRecommendations = {
            clothing: [],
            accessories: [],
            footwear: '',
            color: 'text-blue-600'
        };

        if (tempC >= 30) {
            outfit.clothing = ['Light t-shirt', 'Shorts or light dress', 'Breathable fabrics'];
            outfit.footwear = 'Sandals, slides or sneakers';
            outfit.accessories = ['Sunglasses', 'Face Cap', 'Sunscreen'];
            outfit.color = 'text-orange-600';
        } else if (tempC >= 21 && tempC <= 29) {
            outfit.clothing = ['Light sweater or cardigan', 'Jeans or chinos', 'Cotton shirt'];
            outfit.footwear = 'Comfortable shoes or sneakers';
            outfit.accessories = ['Light jacket (optional)'];
            outfit.color = 'text-green-600';
        } else if (tempC >= 20) {
            outfit.clothing = ['Warm sweater', 'Long pants', 'Layered clothing'];
            outfit.footwear = 'Closed shoes or boots';
            outfit.accessories = ['Light jacket or coat'];
            outfit.color = 'text-blue-600';
        } else {
            outfit.clothing = ['--', '--', '--'];
            outfit.footwear = '--';
            outfit.accessories = ['--', '--'];
            outfit.color = 'text-purple-600';
        }

        // Weather condition adjustments based on description
        if (desc.includes('rain') || desc.includes('drizzle')) {
            outfit.accessories.push('Umbrella', 'Waterproof jacket');
            outfit.footwear = 'Waterproof shoes or boots';
        }

        if (desc.includes('wind')) {
            outfit.accessories.push('Windbreaker or wind-resistant jacket');
        }

        if (desc.includes('cloud') && tempC < 20) {
            outfit.accessories.push('Light jacket (clouds may bring cooler temps)');
        }

        return outfit;
    };

    const outfit = getOutfitRecommendation();

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 font-inter">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                    Outfit Recommendation
                </h3>
            </div>

            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-calming-blue rounded-full mr-2"></span>
                        Clothing
                    </h4>
                    <ul className="text-gray-600 space-y-1">
                        {outfit.clothing.map((item, index) => (
                            <li key={index} className="flex items-center">
                                <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-energizing-orange rounded-full mr-2"></span>
                        Footwear
                    </h4>
                    <p className="text-gray-600 flex items-center">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                        {outfit.footwear}
                    </p>
                </div>

                {outfit.accessories.length > 0 && (
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                            <span className="w-2 h-2 bg-vibrant-green rounded-full mr-2"></span>
                            Accessories
                        </h4>
                        <ul className="text-gray-600 space-y-1">
                            {outfit.accessories.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className={`mt-6 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 ${outfit.color.replace('text-', 'border-')}`}>
                    <p className="text-sm text-gray-700">
                        <strong>Pro tip:</strong> Adjust the clothing recommendations to fit your day!
                    </p>
                </div>
            </div>
        </div>
    );
}

