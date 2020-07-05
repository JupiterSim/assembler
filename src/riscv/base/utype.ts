import { DebugInfo } from '../../types';
import { Expression } from '../../expr';
import { between } from '@jupitersim/helpers';
import { OPCODE, RD, IMM_31_12 } from '../fields';
import { Instruction, BuildError } from '../instruction';

/** Generic U-Type instruction. */
export class UType extends Instruction {
  /** Instruction opcode. */
  readonly opcode: number;
  /** Instruction destination register. */
  readonly rd: number;
  /** Instruction immediate expression. */
  readonly imm: Expression;

  /**
   * Creates a new generic U-Type instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param name      - Instruction name.
   * @param opcode    - Instruction opcode.
   * @param rd        - Instruction destination register.
   * @param imm       - Instruction immediate expresion.
   */
  constructor(debugInfo: DebugInfo, name: string, opcode: number, rd: number, imm: Expression) {
    super(debugInfo, name);
    this.opcode = opcode;
    this.rd = rd;
    this.imm = imm;
  }

  /** {@inheritdoc} */
  build(pc: number): void {
    const imm = this.imm.build(pc, []);
    if (!between(imm, 0, 1048575))
      throw new BuildError(`immediate ${imm} out of range, should be between [0, 1048575]`, this.debugInfo);
    this.code.set(OPCODE, this.opcode);
    this.code.set(RD, this.rd);
    this.code.set(IMM_31_12, imm);
  }
}
