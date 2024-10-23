// TODO: create a new page component based on the bottom hae of the design in public/mockups/home.png

// You fill first need to create three components: SecondaryImage, PetAboutText, and PetCard in the src/components folder. 

// You should also create stories for each of these components in the src/components folder using storybook.

// Use these three components to create the About page
// Look in the public/mockups folder for the design
// 1. Create a component called SecondaryImage based on the design in public/mockups/secondary-image.png
// 2. Create a component called PetAboutText based on the design in public/mockups/description-title.png
// 3. Create a component called PetCard based on the design in public/mockups/amigo-card.png
// Optional: include the "Header from the Home page" at the top of the About page

import PetCard from "../components/PetCard";

export default function AboutPage() {
    return (
        <div className="grid grid-cols-2 gap-4 justify-items-center">
        
            <PetCard emoji="🦄"
            description="O FindAFriend é um produto
            desenvolvido para você encontrar
            o animal de estimação ideal ao seu
            estilo de vida!
            "/>
            
            <PetCard emoji="🐢"
            description="ONGs cadastram os bichinhos
            disponíveis para adoção informando
            características como: porte, nível de
            energia, nível de independência,
            sociabilidade e gênero.
            "/>
            <div className="col-span-2">
            <PetCard emoji="🦆"
            description="Filtre os bichinhos de acordo com suas preferências e lifestyle.
            Depois é só entrar em contato com a ONG para agendar uma visita
            e conhecer pessoalmente seu match perfeito!"/>
            </div>
        </div>
    );
}