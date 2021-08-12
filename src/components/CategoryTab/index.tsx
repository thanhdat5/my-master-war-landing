import React from 'react';
interface Props {
    showAll?: boolean;
    showNew?: boolean;
}
function CategoryTab({ showAll = true, showNew = false }: Props) {
    return (
        <nav className="w-100">
            <div className="nav o-nav-tabs nav-tabs" id="nav-tab" role="tablist">
                {showAll && <a href="#" className="nav-link active" id="nav-cat1-tab" data-bs-toggle="tab" data-bs-target="#nav-cat1" role="tab" aria-controls="nav-cat1" aria-selected="true">🎨 All</a>}
                {showNew && <a href="#" className="nav-link active" id="nav-cat1-tab" data-bs-toggle="tab" data-bs-target="#nav-cat1" role="tab" aria-controls="nav-cat1" aria-selected="true">🎨 New</a>}
                <a href="#" className="nav-link" id="nav-cat2-tab" data-bs-toggle="tab" data-bs-target="#nav-cat2" role="tab" aria-controls="nav-cat2" aria-selected="false">👾 Games</a>
                <a href="#" className="nav-link" id="nav-cat3-tab" data-bs-toggle="tab" data-bs-target="#nav-cat3" role="tab" aria-controls="nav-cat3" aria-selected="false">🌈 Art</a>
                <a href="#" className="nav-link" id="nav-cat4-tab" data-bs-toggle="tab" data-bs-target="#nav-cat4" role="tab" aria-controls="nav-cat4" aria-selected="false">📸 Photo</a>
                <a href="#" className="nav-link" id="nav-cat5-tab" data-bs-toggle="tab" data-bs-target="#nav-cat5" role="tab" aria-controls="nav-cat5" aria-selected="false">🤘 Punks</a>
                <a href="#" className="nav-link" id="nav-cat6-tab" data-bs-toggle="tab" data-bs-target="#nav-cat6" role="tab" aria-controls="nav-cat6" aria-selected="false">🎵 Music</a>
                <a href="#" className="nav-link" id="nav-cat7-tab" data-bs-toggle="tab" data-bs-target="#nav-cat7" role="tab" aria-controls="nav-cat7" aria-selected="false">🤡 Memes</a>
                <a href="#" className="nav-link" id="nav-cat8-tab" data-bs-toggle="tab" data-bs-target="#nav-cat8" role="tab" aria-controls="nav-cat8" aria-selected="false">🌌 Meta</a>
            </div>
        </nav>
    );
}

export default CategoryTab;
