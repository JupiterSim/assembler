import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32D fcvt.d.s instruction. */
export class FCVTDS extends RType {
  /**
   * Creates a new RISC-V RV32D fcvt.d.s instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number) {
    super(debugInfo, 'fcvt.d.s', 0x53, rd, 0x7, rs1, 0, 0x21);
  }
}
