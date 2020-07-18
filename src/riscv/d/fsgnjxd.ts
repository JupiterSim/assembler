import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32D fsgnjx.d instruction. */
export class FSGNJXD extends RType {
  /**
   * Creates a new RISC-V RV32D fsgnjx.d instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   * @param rs2       - Source register 2.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, rs2: number) {
    super(debugInfo, 'fsgnjx.d', 0x53, rd, 0x2, rs1, rs2, 0x11);
  }
}
