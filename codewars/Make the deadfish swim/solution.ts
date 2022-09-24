type DeadFishCommands = 'i' | 's' | 'd' | 'o';

export default function parse(data: string): number[] {
  let initialValue = 0;
  const result: number[] = [];
  const commands = data.split('').filter(command => ['i', 's', 'd', 'o'].includes(command)) as DeadFishCommands[];
  
  commands.forEach(command => {
    switch(command) {
      case 'i':
        ++initialValue;
        break;

      case 'o':
        result.push(initialValue);
        break;

      case 'd':
        --initialValue;
        break;
        
      default:
        initialValue *= initialValue;
    }
  });
  
  return result;
}