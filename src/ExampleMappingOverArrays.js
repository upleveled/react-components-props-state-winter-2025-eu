export default function ExampleMappingOverArrays() {
  // const teamMembers = ['Karl', 'Lukas', 'Victor', 'Antje', 'Lukas'];
  // will cause issues with duplicated keys

  const teamMembers = [
    { id: 1, name: 'Karl' },
    { id: 2, name: 'Lukas' },
    { id: 3, name: 'Victor' },
    { id: 4, name: 'Victor' },
  ];

  return (
    // <ul>
    //   <li>Karl</li>
    //   <li>Lukas</li>
    //   <li>Victor</li>
    // </ul>
    <div>
      {teamMembers.map((teamMember) => {
        return (
          <div key={`teamMember-${teamMember.id}`}>
            <div>{teamMember.name}</div>
          </div>
        );
      })}
    </div>
  );
}
