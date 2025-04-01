import React, { useState, useEffect } from 'react';
import { update ,del} from "../../../utils/api.service";
import '../../Homepages/news/news.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './participantsRequest.css';

import { ParticipationApi } from '../../../api/participant.api';

function ParticipantRequestAdmin() {

    const [searchTerm, setSearchTerm] = useState('');
    const [Participants, setParticipants] = useState([]);
    useEffect(() => {
        ParticipationApi.getParticipants().then((participants)=>{
             setParticipants(participants);
                
            });
         }, []);


         const handleAccept = async (participantId) => {
            const updatedParticipants = await Promise.all(Participants.map(async (participant) => {
                if (participant.id === participantId) {
                    const config = {
                        headers: {
                            'content-type': 'multipart/form-data',
                        },
                    };
        
                    const fd = new FormData();
                    fd.append('name', participant.name);
                    fd.append('email', participant.email);
                    fd.append('phoneNumber', participant.phoneNumber);
                    fd.append('message', participant.message);
                    fd.append('status', 'Done');
                    fd.append('eventTitle', participant.eventTitle);
        
                    await update('/participant', fd, participantId, config);
                    return {
                        ...participant,
                        status: 'Done'
                    };
                }
                return participant;
            }));
        
            setParticipants(updatedParticipants);
        };
    
        const handleDelete = async (participantId) => {
            // Remove the participant from the database
            const config = {
                headers: {
                  'content-type': 'multipart/form-data',
                },
              };
      
              const parcdeleted = await del('/participant', participantId, config);
    
            
            setParticipants(prevParticipants => prevParticipants.filter(participant => participant.id !== participantId));
        };
        const filteredParticipants = Participants.filter(participant =>
            participant.eventTitle.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <>
           
                <div  className='section_participants_admin'>
                <h1 className='section__news__title'>PARTICIPANTS SECTION </h1>
                <div className="mainParticipant">
                <main className="table" id="customers_table">
                <section className="table__header">
                <h1 className='h1ReqParticipant'>Participants's Requests</h1>
                <div className="input-group">
                                <input
                                    type="search"
                                    placeholder="Search Event..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                
                </section>
            <section className="table__body">
                <table>
                    <thead>
                        <tr>
                            <th> Id </th>
                            <th> Name </th>
                            <th> Email </th>
                            <th> Phone Number </th>
                            <th class="narrow-column">Message</th>
                            <th>Event</th>
                            <th> Status </th>
                            <th> Desicion </th>
                        </tr>
                    </thead>
                    <tbody>
                                    {filteredParticipants.map((participant) => (
                                        <tr key={participant.id}>
                                            <td>{participant.id}</td>
                                            <td>{participant.name}</td>
                                            <td>{participant.email}</td>
                                            <td>{participant.phoneNumber}</td>
                                            <td class="narrow-column">{participant.message}</td>
                                            <td>{participant.eventTitle}</td>
                                            <td>{participant.status}</td>
                                            <td>
                                                {participant.status === 'pending' && (
                                                    <div className='buttonDiv'>
                                                        <button className="btn btn-outline-success btnDecision" onClick={() => handleAccept(participant.id)}>Accept</button>
                                                        <button className="btn btn-outline-danger btnDecision" onClick={() => handleDelete(participant.id)}>Delete</button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                </table>
            </section>
        </main>

                    </div>
                </div>
            
        </>
    );
}

export default ParticipantRequestAdmin;
