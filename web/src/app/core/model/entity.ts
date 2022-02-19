export abstract class Entity {
  protected static entityType: string;
  id: string;

  constructor(json?: any) {
    if (json) {
      this.id = json.id;
    }
  }
}
