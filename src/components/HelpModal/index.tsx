import NImage from 'components/NImage';
import React from 'react';
export default function HelpModal() {

    return (
        <div className="modal fade tgk-modal" id="helpModal" tabIndex={-1} aria-labelledby="helpModalLabel" aria-hidden="false">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <NImage src="text-tro-giup.png" alt="help" />
                    </div>
                    <div className="modal-body">
                        <img height="430" src="/media/images/help.png" alt="help" className="position-absolute" style={{ top: '-50px', left: '-220px' }} />
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto dolor nisi corporis nemo optio quasi tenetur? Alias labore quas ullam eaque perspiciatis dolore quia earum ipsum. Similique, adipisci architecto.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
