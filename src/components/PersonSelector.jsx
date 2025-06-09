const PersonSelector = ({ activePerson, onChange }) => {
  const people = [
    { id: 'caitlin-clark', name: 'Caitlin Clark' },
    { id: 'blake-lively', name: 'Blake Lively' },
    { id: 'eleanor-roosevelt', name: 'Eleanor Roosevelt' },
    { id: 'janis-joplin', name: 'Janis Joplin' }
  ];

  return (
    <div className="flex gap-6 items-center justify-start">
      {people.map((person) => (
        <button
          key={person.id}
          onClick={() => onChange(person.id)}
          className={`
            px-4 py-3 rounded-full font-medium transition-all cursor-pointer
            ${activePerson === person.id
              ? 'bg-white shadow-[0px_16px_24px_0px_rgba(0,0,0,0.05)] text-black font-bold'
              : 'bg-[#e3ddd3] text-black hover:bg-[#d8d2c8]'
            }
          `}
        >
          {person.name}
        </button>
      ))}
    </div>
  );
};

export default PersonSelector;
