fn main() {

}

const PRE_CHARACTER_BYTE: u8= 97 - 1;
const POST_CHARACTER_BYTE: u8 = 122 + 1;

fn alphabet_position(text: &str) -> String {

    let characters: Vec<u8> = text.to_lowercase().as_bytes().iter().filter(|character_byte| {
        character_byte < &&POST_CHARACTER_BYTE && character_byte > &&PRE_CHARACTER_BYTE
    }).map(|character_byte| {
        character_byte - PRE_CHARACTER_BYTE
    }).collect();

    let mut result = String::new();
    for character_byte in characters {
        result += &(format!("{} ", character_byte));
    }

    result.trim_end().to_string()
}
