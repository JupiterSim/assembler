import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32D fclass.d instruction. */
export class FCLASSD extends RType {
  /**
   * Creates a new RISC-V RV32D fclass.d instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number) {
    super(debugInfo, 'fclass.d', 0x53, rd, 0x1, rs1, 0x0, 0x71);
  }
}
