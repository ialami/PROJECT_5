export class Validator {
    inputAssign(sources: Array<string>, input: any): void {
      for (const source of sources) {
        try {
          if (input[source] === undefined || input[source] === null) {
            throw new Error('Undefined or null');
          }

          this[source] = input[source];
        } catch (e) {
          throw new Error(
            'Can not make "' + source + '" property mutable : ' + e.message
          );
        }
      }
    }

    inputAssignOptional(sources: Array<string>, input: any): void {
      for (const source of sources) {
        try {
          this[source] = input[source];
        } catch (e) {
          // continue
        }
      }
    }

    constructor(input: any, required: Array<string>, optional: Array<string>) {
      // do the magic
      this.inputAssign(required, input);
      this.inputAssignOptional(optional, input);
    }
  }

  export class ValidatorExport extends Validator {
    constructor(input: any, required: Array<string>, optional: Array<string>) {
      super(input, required, optional);
    }

    public toJSON(): any {
      // @TODO:: correct that lazyness
      return JSON.parse(this.stringify());
    }

    public stringify(): string {
      // const exclude = ['toJSON', 'stringify'];
      return JSON.stringify(this.toObject());
    }

    public toObject(): object {
      const exclude = [
        'toJSON',
        'toObject',
        'stringify',
        'inputAssign',
        'inputAssignOptional'
      ];

      const clone = {};

      for (const key of Object.keys(this)) {
        if (this.hasOwnProperty(key)) {
          if (exclude.indexOf(key) === -1) {
            clone[key] = this[key];
          }
        }
      }

      return clone;
    }
  }

  export class ObjectEnrich {
    public toJSON(): any {
      // @TODO:: correct that lazyness
      return JSON.parse(this.stringify());
    }

    public stringify(): string {
      return JSON.stringify(this.toObject());
    }

    public toObject(): any {
      const exclude = ['toJSON', 'stringify', 'toObject'];
      const clone = {};
      for (const key of Object.keys(this)) {
        if (this.hasOwnProperty(key)) {
          if (exclude.indexOf(key) === -1) {
            clone[key] = this[key];
          }
        }
      }

      return clone;
    }
  }